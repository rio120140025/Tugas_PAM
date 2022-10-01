let nilai = [
    {nama : 'rio', mutu : 'A'},
    {nama : 'diba', mutu : 'A'},
    {nama : 'asip', mutu : 'B'},
]

nilai = nilai.filter(nilai => nilai.mutu == 'A')
console.log(nilai.map(nilai => nilai.nama))