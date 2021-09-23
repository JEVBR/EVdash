function filter_inv(msg) {
    split_msg = (msg.split(','))
    if (split_msg[0] === "#T") { 
        values.counter = values.counter + 1 
        values.Id10 = round(split_msg[1],2)
        values.Iq10 = round(split_msg[2],2)
        values.value_3 = round(split_msg[3],2)
        values.value_4 = round(split_msg[4],2)
        values.value_5 = round(split_msg[5],2)
        values.Ia10 = round(split_msg[6],2)
        values.Ib10 = round(split_msg[7],2)
        values.Vpct=  round(split_msg[8],2)
        values.value_9 = round(split_msg[9],2)
        values.value_10 = round(split_msg[10],2)
        values.value_11 = round(split_msg[11],2)
        values.value_12 = round(split_msg[12],2)
        values.value_13 = round(split_msg[13],2)
        values.value_14 = round(split_msg[14],2)
        console.log(values)
    } else {
        console.log(msg)
    }
}

function update_inv_texts(){

    document.querySelector('#messages').innerHTML = `<span>${values.counter}</span>`;

    document.querySelector('#Id10').innerHTML = `<span>${values.Id10}</span>`;
    document.querySelector('#Iq10').innerHTML = `<span>${values.Iq10}</span>`;
    document.querySelector('#value_3').innerHTML = `<span>${values.value_3}</span>`;
    document.querySelector('#value_4').innerHTML = `<span>${values.value_4}</span>`;
    document.querySelector('#value_5').innerHTML = `<span>${values.value_5}</span>`;
    document.querySelector('#Ia10').innerHTML = `<span>${values.Ia10}</span>`;
    document.querySelector('#Ib10').innerHTML = `<span>${values.Ib10}</span>`;
    document.querySelector('#Vpct').innerHTML = `<span>${values.Vpct}</span>`;
    document.querySelector('#value_9').innerHTML = `<span>${values.value_9}</span>`;
    document.querySelector('#value_10').innerHTML = `<span>${values.value_10}</span>`;
    document.querySelector('#value_11').innerHTML = `<span>${values.value_11}</span>`;
    document.querySelector('#value_12').innerHTML = `<span>${values.value_12}</span>`;
    document.querySelector('#value_13').innerHTML = `<span>${values.value_13}</span>`;
    document.querySelector('#value_14').innerHTML = `<span>${values.value_14}</span>`;
    
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
