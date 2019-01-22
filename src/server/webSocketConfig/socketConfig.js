import mongoose from 'mongoose';
//class for socket-feeds 
import users from './../class/roomMates';
//email config
import Mailer from './../services/Mailer';
//database models
const Channel = mongoose.model('channels');
const Graph = mongoose.model('graphs');
const Map = mongoose.model('maps');
const user = new users();

export default (io) => {
    //need to make connection secure and proper changes to data 
    io.use((socket, next) => {
        //socket.handshake && socket.request
        next()
    });

    io.on('connection', (socket) => {
        //to join a channel section
        //adds into a room with the channel id for communication
        socket.on('join', async (token, callback) => {
            const channel = await Channel.findByToken(token)
            if (!channel) {
                callback("Invalid channel token");
            }
            socket.join(channel._id);
            user.removerUser(socket.id);
            user.addUser(socket.id, channel._id);
            callback(null);
        });

        //configuration for socket feeds 
        socket.on('msgCenter', async (data, callback) => {
            const channel = await Channel.findByToken(data.token);
            if (!channel) {
                callback('Invalid channel token');
            }
            delete data['token'];
            socket.broadcast.to(channel._id).emit('newMsg', data)
        });

        //to update a graph in collection
        socket.on('updateGraph', async (data, callback) => {
            const channel = await Channel.findByToken(data.token);
            if (!channel) {
                callback('Invalid Channel Token')
            }
            const {
                save,
                name
            } = data;
            if (save || (typeof (save) === undefined)) {
                const field = await Graph.findOne({
                    _channel: channel._id,
                    name
                });
                const limitBreaker = new Array();
                const temp = new Object();
                if (field.xAxis === "Time") {
                    temp["Time"] = new Date().getTime();
                } else {
                    temp[field.xAxis.name] = data.xAxis;
                }
                field.data.name.forEach(element => {
                    const test = data[element];
                    if ((field.upperLimit && field.lowerLimit) && (test > field.upperLimit || test < field.lowerLimit)) {
                        limitBreaker.push({
                            name: element,
                            value: test
                        })
                    }!test ? temp[element] = (field.data.values[field.data.length - 1][element] || null) : temp[element] = test;
                });
                if (limitBreaker.length != 0) {
                    const mailer = new Mailer(field, emailTemplate(limitBreaker, field.name, channel.name));
                    mailer.send();
                }
                field.data.values.push(temp);
                field.save().then(() => {
                    const temp2 = data.name;
                    io.to(channel._id).emit('updateFieldValue', {
                        name: temp2,
                        value: temp
                    });
                });
            } else {
                const temp1 = data;
                delete temp1.save;
                delete temp1.token;
                temp1["Time"] = new Date().getTime();
                const temp2 = data.name;
                delete temp1.name;
                io.to(channel._id).emit('updateFieldValue', {
                    name: temp2,
                    value: temp1
                });
            }
        });

        //to update map
        socket.on('updateMap', async (data, callback) => {
            const channel = await Channel.findByToken(data.token);
            if (!channel) {
                callback('Invalid Channel Token')
            }
            const time = new Date().getTime();
            const {
                save,
                name
            } = data;
            if (save || (typeof (save) === undefined)) {
                const map = await Map.findOne({
                    _channel: channel._id,
                    name
                })
                const values = new Object();
                values["time"] = time;
                map.keys.forEach(element => {
                    const test = data[element];
                    if (test && (typeof test === Array)) {
                        const temp = map.keys.indexOf(element);
                        map.persons[temp].pos.push(test)
                        map.persons[temp].time.push(time);
                        values[element] = test;
                    }
                });
                map.save().then(() => {
                    io.to(channel._id).emit('updateMapValue', {
                        name: map.name,
                        value: values
                    });
                });
            } else {
                const temp = data;
                delete temp['save'];
                delete temp['name'];
                delete temp['token'];
                temp['time'] = time;
                io.to(channel._id).emit('updateMapValue', {
                    name,
                    value: temp
                });
            }
        });

        //video streaming in socket feeds
        socket.on('stream', async (token, name, image) => {
            const channel = await Channel.findByToken(token);
            if (channel) {
                io.to(channel._id).emit('streamVideo', image);
            }
        });
    });
};