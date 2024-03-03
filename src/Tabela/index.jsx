import { useEffect, useState } from "react"

function Tabela({imcValor}) {
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [num3, setNum3] = useState('')
    const [num4, setNum4] = useState('')
    const [num5, setNum5] = useState('')

    useEffect(() => {
        setNum1(document.querySelector('#linha1'))
        setNum2(document.querySelector('#linha2'))
        setNum3(document.querySelector('#linha3'))
        setNum4(document.querySelector('#linha4'))
        setNum5(document.querySelector('#linha5'))

}, [imcValor])

    return (
        <div className="container mt-5">
                <table className="table table-hover text-center">
                    <thead className="table-dark">
                        <tr>
                            <th>
                                IMC
                            </th>
                            <th>
                                Classificação
                            </th>
                            <th>
                                Obesidade
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr id="linha1" className={imcValor < 18.5 ? 'table-warning' : ''}>
                            <td>
                                Menor que 18,5
                            </td>
                            <td>
                                Magreza
                            </td>
                            <td>
                                0
                            </td>
                        </tr>
                        <tr id="linha2" className={imcValor > 18.5 & imcValor < 25 ? 'table-success' : ''}>
                            <td>
                                Entre 18,5 e 24,9
                            </td>
                            <td>
                                Normal
                            </td>
                            <td>
                                0
                            </td>
                        </tr>
                        <tr id="linha3" className={imcValor > 25 & imcValor < 30 ? 'table-warning' : ''}>
                            <td>
                                Entre 25,0 e 29,9
                            </td>
                            <td>
                                Sobrepeso
                            </td>
                            <td>
                                I
                            </td>
                        </tr>
                        <tr id="linha4" className={imcValor > 30 & imcValor < 40 ? 'table-danger' : ''}>
                            <td>
                                Entre 30,0 e 39,9
                            </td>
                            <td>
                                Obesidade
                            </td>
                            <td>
                                II
                            </td>
                        </tr>
                        <tr id="linha5" className={imcValor > 40 ? 'table-danger' : ''}>
                            <td>
                                Maior que 40,0
                            </td>
                            <td>
                                Obesidade Grave
                            </td>
                            <td>
                                III
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
    )
}

export default Tabela