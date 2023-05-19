const bandas = [
    {
        banda: 'AC/DC',
        ano: 1973
    },
    {
        banda: 'Nickelback',
        ano: 1995
    },
    {
        banda: 'Deep purple',
        ano: 1960
    }
]
for (let c of bandas){
    const bandaFormatada = `Nome da banda: ${c.banda}. Ano de formação: ${c.ano}`
    console.log(c);
    console.log(bandaFormatada);
}