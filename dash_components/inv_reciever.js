function filter_inv(msg) {
    split_msg = (msg.split(','))
    if (split_msg[0] === "#T") { 
        values.counter = values.counter + 1 
        values.value_1 = round(split_msg[1],2)
        values.value_2 =  round(split_msg[2],2)
        values.value_3 =  round(split_msg[3],2)
        values.value_4 =  round(split_msg[4],2)
        values.value_5 =  round(split_msg[5],2)
        values.value_6 =  round(split_msg[6],2)
        values.value_7 =  round(split_msg[7],2)
        values.value_8 =  round(split_msg[8],2)
        values.value_9 =  round(split_msg[9],2)
        values.value_10 =  round(split_msg[10],2)
        values.value_11 =  round(split_msg[11],2)
        values.value_12 =  round(split_msg[12],2)
        values.value_13 =  round(split_msg[13],2)
        values.value_14 =  round(split_msg[14],2)
        //console.log(values)
    } else {
        console.log(msg)
    }

}

function update_inv_texts(){

    document.querySelector('#messages').innerHTML = `<span>${values.counter}</span>`;

    document.querySelector('#value_1').innerHTML = `<span>${values.value_1}</span>`;
    document.querySelector('#value_2').innerHTML = `<span>${values.value_2}</span>`;
    document.querySelector('#value_3').innerHTML = `<span>${values.value_3}</span>`;
    document.querySelector('#value_4').innerHTML = `<span>${values.value_4}</span>`;
    document.querySelector('#value_5').innerHTML = `<span>${values.value_5}</span>`;
    document.querySelector('#value_6').innerHTML = `<span>${values.value_6}</span>`;
    document.querySelector('#value_7').innerHTML = `<span>${values.value_7}</span>`;
    document.querySelector('#value_8').innerHTML = `<span>${values.value_8}</span>`;
    document.querySelector('#value_9').innerHTML = `<span>${values.value_9}</span>`;
    document.querySelector('#value_10').innerHTML = `<span>${values.value_10}</span>`;
    document.querySelector('#value_11').innerHTML = `<span>${values.value_11}</span>`;
    document.querySelector('#value_12').innerHTML = `<span>${values.value_12}</span>`;
    document.querySelector('#value_13').innerHTML = `<span>${values.value_13}</span>`;
    document.querySelector('#value_14').innerHTML = `<span>${values.value_14}</span>`;
    
}

function update_inv_charts() {
    var data = [];

    data.push(values.value_2);
    data.push(values.value_3);
    data.push(values.value_4);
    data.push(values.value_5);

    // addData(myLineChart, values.counter, data);
    // // console.log(myLineChart1.data.datasets[0].data)
    // succaoInv = (values.succao *-1)*100
    myLineChart1.data.datasets[0].data = [values.value_2,100-values.value_2]
    myLineChart1.update()

    myLineChart2.data.datasets[0].data = [values.value_3,100-(values.value_3)]
    myLineChart2.update()

    // myLineChart3.data.datasets[0].data = [values.vazao,100-(values.vazao)]
    // myLineChart3.update()

    // myLineChart4.data.datasets[0].data = [values.densidade,100-(values.densidade)]
    // myLineChart4.update()
}
