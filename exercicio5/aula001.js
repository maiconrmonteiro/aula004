let numero = [3, 9, 5, 7, 4]

/*for (let pos = 0 ; pos < numero.length ; pos++ ){
      console.log(`A posição ${pos} tem o numero ${numero[pos]}`)

}*/

for (let pos in numero) {
    console.log(`A posição ${pos} tem o numero ${numero[pos]}`)
}


