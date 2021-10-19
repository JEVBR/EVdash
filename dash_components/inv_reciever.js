function filter_inv(msg) {
    split_msg = (msg.split(','))
    if (split_msg[0] === "#T") {
        
        

        values.counter = values.counter + 1 
        values.Id10 = signed_int(split_msg[1])  
        values.Iq10 = signed_int(split_msg[2])  
        values.IdRef = signed_int(split_msg[3])
        values.IqRef = signed_int(split_msg[4])
        values.IBat = signed_int(split_msg[5])
        values.Ia10 = signed_int(split_msg[6])
        values.Ib10 = signed_int(split_msg[7])
        values.Vpct=  signed_int(split_msg[8])
        values.Rth = signed_int(split_msg[9])
        values.Th = signed_int(split_msg[10])
        values.Slip = signed_int(split_msg[11])
        values.ERpm = signed_int(split_msg[12])
        values.MRpm = signed_int(split_msg[13])
        values.PosCnt = signed_int(split_msg[14])
        // console.log(values)
    } else {
        console.log(msg)
    }
}

function signed_int(x) {
    return (x > 32767 ? x - 65536 : x - 0 ) // - 0 removes leading zeros
}


function update_inv_texts(){

    document.querySelector('#messages').innerHTML = `<span>${values.counter}</span>`;

    document.querySelector('#Id10').innerHTML = `<span>${values.Id10}</span>`;
    document.querySelector('#Iq10').innerHTML = `<span>${values.Iq10}</span>`;
    document.querySelector('#IdRef').innerHTML = `<span>${values.IdRef}</span>`;
    document.querySelector('#IqRef').innerHTML = `<span>${values.IqRef}</span>`;
    document.querySelector('#IBat').innerHTML = `<span>${values.IBat}</span>`;
    document.querySelector('#Ia10').innerHTML = `<span>${values.Ia10}</span>`;
    document.querySelector('#Ib10').innerHTML = `<span>${values.Ib10}</span>`;
    document.querySelector('#Vpct').innerHTML = `<span>${values.Vpct}</span>`;
    document.querySelector('#Rth').innerHTML = `<span>${values.Rth}</span>`;
    document.querySelector('#Th').innerHTML = `<span>${values.Th}</span>`;
    document.querySelector('#Slip').innerHTML = `<span>${values.Slip}</span>`;
    document.querySelector('#ERpm').innerHTML = `<span>${values.ERpm}</span>`;
    document.querySelector('#MRpm').innerHTML = `<span>${values.MRpm}</span>`;
    document.querySelector('#PosCnt').innerHTML = `<span>${values.PosCnt}</span>`;
    
}

function update_inv_charts() {
    var data = [];

    data.push(values.Id10);
    data.push(values.Iq10);
    data.push(values.Ia10);
    data.push(values.Ib10);

    addData(myLineChart, values.counter, data);


    var update = {};
    update = { value: values.Iq10 };
    Plotly.restyle('Iq10div', update, 0);

    update = { value: values.Id10 };
    Plotly.restyle('Id10div', update, 0);


    // myLineChart2.data.datasets[0].data = [values.value_3,100-(values.value_3)]
    // myLineChart2.update()

    // myLineChart3.data.datasets[0].data = [values.vazao,100-(values.vazao)]
    // myLineChart3.update()

    // myLineChart4.data.datasets[0].data = [values.densidade,100-(values.densidade)]
    // myLineChart4.update()
}
