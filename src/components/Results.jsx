import React from 'react'
import { calculateInvestmentResults, formatter } from '../util/investment'

const Results = ({ input }) => {
  const resultsData = calculateInvestmentResults(input);
  const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment

  return (

    <table id='result'>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment</th>
          <th>Interest (Year)</th>
          <th>Total Interests</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((data, index) => {
          const totalInterest = data.valueEndOfYear - data.annualInvestment * data.year - initialInvestment
          const capitalInestment = data.valueEndOfYear - data.interest
          return (
            <tr key={index}>
              <td>{data.year}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(capitalInestment)}</td>
              <td></td>
              <td></td>
            </tr>
          )
        })}
      </tbody>
    </table>

  )
}

export default Results