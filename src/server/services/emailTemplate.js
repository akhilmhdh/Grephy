export default (value,fieldName,channelName)=>{
    return(`
    <html>
        <body>
        <h3>Hi! Your field ${fieldName} of channel ${channelName} has crossed limits </h3>
        <h4>Data</h4>
        <ul style="list-style:none;">${value.map((el)=>{return(`
            <li>
                ${el.name}:${el.value}
            </li>
        `)})}</ul>
        </body>
    </html>
    `)
}