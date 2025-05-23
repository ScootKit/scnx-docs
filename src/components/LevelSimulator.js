import React, {useState} from 'react';
import Translate from '@docusaurus/Translate';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCalculator, faExclamationCircle, faGaugeMax} from '@fortawesome/pro-solid-svg-icons';
import Formula from 'fparser';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const builtInCurves = {
    'EXPONENTIAL': 'x * 750 + ((x-1) * 500)',
    'LINEAR': 'x * 750',
    'EXPONENTIATION': '350 * (x-1)^2'
};

export default function LevelSimulator() {
    const [formulaType, setFormulaType] = useState('EXPONENTIAL');
    const [level, setLevel] = useState(15);
    const [customFormula, setCustomFormula] = useState('');
    const [minXP, setMinXP] = useState(25);
    const [maxXP, setMaxXP] = useState(65);
    const {i18n} = useDocusaurusContext();

    let formula;
    let errors = [];
    try {
        console.log(formulaType);
        formula = new Formula(formulaType === 'CUSTOM' ? customFormula : builtInCurves[formulaType]);
        if (formula && formula.getVariables().length > 1) errors.push('tooManyVariables');
        if (formula && formula.getVariables()[0] !== 'x') errors.push('firstVariableNotX');
    } catch (e) {
        errors.push('unknownError');
    }
    if (minXP > maxXP) errors.push('maxXPSmallerThenMinXP')
    if (minXP <= 0 || maxXP <= 0 || level <= 0) errors.push('negativeNumbers')
    if (errors.length !== 0) formula = null;

    const neededXP = formula ? formula.evaluate({x: level}) : null;

    return <div className="card padding--md margin-bottom--md" style={{maxWidth: '27rem'}}>
        <p style={{fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.6rem'}}>
            <FontAwesomeIcon icon={faGaugeMax} style={{marginRight: '4px'}}/> <Translate
            id="levelSimpulator.header">Level simulator</Translate>
        </p>
        <div>
            <div>
                    <span style={{marginRight: '5px', fontWeight: 500}}><Translate
                        id="levelSimpulator.levelCurve">Your level curve</Translate>:</span>
                <select className="select" value={formulaType} onChange={(e) => setFormulaType(e.target.value)}>
                    <option value="EXPONENTIAL">
                        <Translate
                            id="levelSimpulator.EXPONENTIAL">Easy Linear</Translate>
                    </option>
                    <option value="LINEAR">
                        <Translate
                            id="levelSimpulator.LINEAR">Default Linear</Translate>
                    </option>
                    <option value="EXPONENTIATION">
                        <Translate
                            id="levelSimpulator.EXPONENTIATION">Exponentiation (softer start, harder leveling after
                            level
                            14)</Translate>
                    </option>
                    <option value="CUSTOM">
                        <Translate
                            id="levelSimpulator.CUSTOM">Custom formula (dangerous!)</Translate>
                    </option>
                </select>
            </div>
            {formulaType === 'CUSTOM' && <div style={{marginTop: '8px'}}>
                     <span style={{marginRight: '2px', fontWeight: 500}}><Translate
                         id="levelSimpulator.customLevelCurve">Your custom level curve</Translate>
                     </span>: <input type="text" placeholder="must include x"
                                     onBlur={(e) => setCustomFormula(e.target.value)}/>
            </div>}
            <div style={{marginTop: '8px'}}>
                     <span style={{marginRight: '2px', fontWeight: 500}}><Translate
                         id="levelSimpulator.minXP">XP given at least for messages</Translate>
                     </span>: <input defaultValue={minXP} type="number" min={1}
                                     onBlur={(e) => setMinXP(parseInt(e.target.value))}/>
            </div>
            <div style={{marginTop: '8px'}}>
                     <span style={{marginRight: '2px', fontWeight: 500}}><Translate
                         id="levelSimpulator.maxXP">XP given at most for messages</Translate>
                     </span>: <input defaultValue={maxXP} type="number" min={1}
                                     onBlur={(e) => setMaxXP(parseInt(e.target.value))}/>
            </div>
            <div style={{
                marginTop: '12px',
                borderTop: 'solid',
                borderWidth: '1px',
                borderColor: 'gray',
                paddingTop: '12px',
                maxWidth: '27rem'
            }}>
                     <span style={{marginRight: '2px', fontWeight: 500}}><Translate
                         id="levelSimpulator.level">Level to be calculated</Translate>
                     </span>: <input defaultValue={level} type="number" min={1}
                                     onBlur={(e) => setLevel(parseInt(e.target.value))}/>
            </div>
        </div>
        <div style={{marginTop: '15px'}}>
            <p style={{fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.4rem'}}>
                <FontAwesomeIcon icon={faCalculator} style={{marginRight: '4px'}}/> <Translate
                id="levelSimpulator.result">Result</Translate>
            </p>
            {formula ? <div style={{marginTop: '5px'}}>
                <div>
                    <span style={{marginRight: '2px', fontWeight: 500}}><Translate
                        id="levelSimpulator.parsedFormula">Parsed level formula</Translate></span>: <code
                    style={{userSelect: 'all'}}>{formula.getExpression().toString()}</code>
                    <span style={{marginLeft: '5px', color: 'slategray'}}>(<Translate id="levelSimpulator.variableInfo"
                                                                                      values={{
                                                                                          v: <code>x</code>
                                                                                      }}>{'the variable {v} is the level to be calculated'}</Translate>)</span>
                </div>
                <div>
                    <div style={{padding: '5px', marginTop: '10px', color: 'rgb(74, 222, 128)'}}>
                        <div style={{textAlign: 'center', fontWeight: 600}}><Translate values={{level}}
                                                                                       id="levelSimpulator.xpNeededHeader">{'XP needed for Level {level}'}</Translate>
                        </div>
                        <div style={{textAlign: 'center'}}>
                            {new Intl.NumberFormat(i18n.currentLocale, {maximumFractionDigits: 0}).format(neededXP)}
                        </div>
                    </div>
                </div>
                <div style={{fontWeight: 600, textAlign: 'center', textTransform: 'uppercase', marginTop: '5px',}}>
                    <Translate
                        id="levelSimpulator.numberOfMessagesNeeded" values={{level}}>{'Number of messages needed for level {level}'}</Translate>
                </div>
                <div style={{justifyContent: 'center'}} className="flex flex-wrap">
                    <div style={{padding: '5px', marginLeft: '5px'}}>
                        <div style={{textAlign: 'center', fontWeight: 500}}><Translate
                                                                                       id="levelSimpulator.minMessagesNeededHeader">Minimum</Translate></div>
                        <div style={{textAlign: 'center'}}>
                            {new Intl.NumberFormat(i18n.currentLocale, {maximumFractionDigits: 0}).format(neededXP / maxXP)}
                        </div>
                    </div>
                    <div style={{padding: '5px', marginLeft: '5px'}}>
                        <div style={{textAlign: 'center', fontWeight: 500}}><Translate
                            id="levelSimpulator.avgMessagesNeededHeader">Average</Translate></div>
                        <div style={{textAlign: 'center'}}>
                            {new Intl.NumberFormat(i18n.currentLocale, {maximumFractionDigits: 0}).format(neededXP / (minXP + ((maxXP - minXP) / 2)))}
                        </div>
                    </div>
                    <div style={{padding: '5px', marginLeft: '5px'}}>
                        <div style={{textAlign: 'center', fontWeight: 500}}><Translate
                            id="levelSimpulator.maxMessagesNeededHeader">Maximum</Translate></div>
                        <div style={{textAlign: 'center'}}>
                            {new Intl.NumberFormat(i18n.currentLocale, {maximumFractionDigits: 0}).format(neededXP / minXP)}
                        </div>
                    </div>
                </div>
            </div> : <div style={{marginTop: '5px'}}>
                {errors.includes('tooManyVariables') &&
                    <div className="data-warning"><FontAwesomeIcon icon={faExclamationCircle}
                                                                   style={{marginRight: '7px'}}/>
                        <Translate
                            id="levelSimpulator.tooManyVariables">Too many variables included in custom level
                            curve.</Translate>
                    </div>}
                {errors.includes('firstVariableNotX') &&
                    <div className="data-warning"><FontAwesomeIcon icon={faExclamationCircle}
                                                                   style={{marginRight: '7px'}}/>
                        <Translate
                            id="levelSimpulator.firstVariableNotX">The first variable of your level curve is not
                            x.</Translate>
                    </div>}
                {errors.includes('unknownError') &&
                    <div className="data-warning"><FontAwesomeIcon icon={faExclamationCircle}
                                                                   style={{marginRight: '7px'}}/>
                        <Translate
                            id="levelSimpulator.unknownError">Error parsing custom level formula.</Translate>
                    </div>}
                {errors.includes('negativeNumbers') &&
                    <div className="data-warning"><FontAwesomeIcon icon={faExclamationCircle}
                                                                   style={{marginRight: '7px'}}/>
                        <Translate
                            id="levelSimpulator.negativeNumbers">Negative numbers are included in the calculator.</Translate>
                    </div>}
                {errors.includes('maxXPSmallerThenMinXP') &&
                    <div className="data-warning"><FontAwesomeIcon icon={faExclamationCircle}
                                                                   style={{marginRight: '7px'}}/>
                        <Translate
                            id="levelSimpulator.maxXPSmallerThenMinXP">The minimum amount of XP given is higher than the maximum amount.</Translate>
                    </div>}
            </div>}
        </div>
    </div>;
}