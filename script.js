let arr = [12, 34, 56, 78, 0, 12, 99, 23, 34, 56, 0, 78, 45, 67, 34, 0, 89, 12, 56, 78, 0, 23, 34, 45, 56];

function sortBubble() {
    let temp;
    for (let i=0; i < arr.length-1; i++) {
        for (let j=0; j < arr.length-i-1; j++) {
            console.log(`---Новая итерация---`)
            console.log(`Текущий массив: ${arr}`);
            console.log(`Сравним значения: ${arr[j]} и ${arr[j+1]}`);
            console.log(`Сравним индексы: ${j} и ${j+1}`);
            if (arr[j] < arr[j+1]){
                temp = arr[j],
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
            console.log(`Новый массив: ${arr}`)
        }
    }
    console.log(arr);
}

sortBubble();


