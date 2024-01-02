import React, { useState } from 'react'

const UserInput = ({userInput, onChangeInput}) => {
 
    return (
        <section id='user-input'>
            <div id='user-group'>
                <p>
                    <label>Initial Investment</label>
                    <input type="number"
                        value={userInput.initialInvestment}
                        onChange={(event) => onChangeInput('initialInvestment', event.target.value)} />
                </p>

                <p>
                    <label>Annual Investment</label>
                    <input type="number"
                        value={userInput.annualInvestment}
                        onChange={(event) => onChangeInput('annualInvestment', event.target.value)} />
                </p>
            </div>
            <div className="user-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number"
                        value={userInput.expectedReturn}
                        onChange={(event) => onChangeInput('expectedReturn', event.target.value)} />
                </p>

                <p>
                    <label>Duration</label>
                    <input type="number"
                        value={userInput.duration}
                        onChange={(event) => onChangeInput('duration', event.target.value)} />
                </p>

            </div>

        </section>
    )
}

export default UserInput