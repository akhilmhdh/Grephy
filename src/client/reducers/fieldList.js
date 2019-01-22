import {
    FETCH_FIELD_LIST
} from './../actions/fetchFieldList';

export default (state = null, action) => {
    switch (action.type) {
        case FETCH_FIELD_LIST:
            return action.payload.data;
        case 'fieldUpdate':
            const item1 = state.graphs.map((el) => {
                if (el.name !== action.result.name) {
                    return el;
                }
                el.data.values = [...el.data.values, action.result.value];
                return el;
            });
            return ({ ...state,
                graphs: item1
            });
        case 'mapUpdate':
            const item2 = state.maps.map((el) => {
                if (el.name !== action.result.name) {
                    return el;
                }
                const temp = el.persons.map((el) => {
                    if (action.result.value[el.name]) {
                        el.pos = [...el.pos, ...[action.result.value[el.name]]]
                        console.log(action.result.value['time'])
                        el.time=[...el.time,action.result.value['time']];
                    }
                    return el;
                });
                return ({ ...el,
                    persons: temp
                });
            });
            console.log(item2);
            return ({ ...state,
                maps: item2
            });
        case 'videoUpdate':
            // const item3=state.videos.maps((el)=>{
            //     if (el.name !== action.result.name) {
            //         return el;
            //     }
            //     return({...el,image:action.result.image});

            // });
            // console.log({...state,videos:item3});
            // return({...state,videos:item3})
            console.log("yo");
            return(state);
        default:
            return state;
    }
};