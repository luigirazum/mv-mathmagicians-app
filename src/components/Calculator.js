import { useState } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';
import Display from './Display';

const basicOperatorsList = '=,+,-,x,÷';
const basicOperatorsNamesList = 'eql,pls,mns,tms,div';
const extraOperatorsList = '.,%,+/-,AC';
const extraOperatorsNamesList = 'dec,pct,neg,clr';
const numbersList = '0,1,2,3,4,5,6,7,8,9';

const basicOperators = basicOperatorsList.split(',');
const basicOperatorsNames = basicOperatorsNamesList.split(',');
const extraOperators = extraOperatorsList.split(',');
const extraOperatorsNames = extraOperatorsNamesList.split(',');

const getOperatorIndex = (element, items) => items.indexOf(element);
const getOperatorName = (operatorIndex, items) => items[operatorIndex];

const Calculator = () => {
  const [state, setState] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    e.preventDefault();
    setState((state) => calculate(state, e.target.name));
  };

  const operators = basicOperators.concat(extraOperators);
  const operatorsNames = basicOperatorsNames.concat(extraOperatorsNames);
  const numbers = numbersList.split(',');

  const calculatorButtons = numbers.concat(operators);

  const renderCalculatorButtons = calculatorButtons
    .map((calculatorButton, index) => {
      let buttonClasses = '';

      if (!numbers.includes(calculatorButton)) {
        const operatorIndex = getOperatorIndex(calculatorButton, operators);
        const operatorName = getOperatorName(operatorIndex, operatorsNames);

        buttonClasses = basicOperators
          .includes(calculatorButton)
          ? `${operatorName} basicOperator`
          : operatorName;
      } else {
        buttonClasses = `nm${calculatorButton}`;
      }

      return (
        <Button
          key={calculatorButton}
          name={calculatorButton}
          classType={buttonClasses}
          tbindex={index + 2}
          onClick={handleClick}
        />
      );
    });

  return (
    <div className="calculator">
      <Display tbindex={1} content={state.next || state.total} />
      {renderCalculatorButtons}
    </div>
  );
};

export default Calculator;
