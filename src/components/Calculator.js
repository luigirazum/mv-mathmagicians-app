import Button from './Button';
import Display from './Display';

const Calculator = () => {
  const basicOperatorsList = '=,+,-,x,÷';
  const basicOperatorsNamesList = 'eql,pls,mns,tms,div';
  const extraOperatorsList = '.,%,+/-,AC';
  const extraOperatorsNamesList = 'dec,pct,neg,clr';
  const numbersList = '0,1,2,3,4,5,6,7,8,9';

  const basicOperators = basicOperatorsList.split(',');
  const basicOperatorsNames = basicOperatorsNamesList.split(',');
  const extraOperators = extraOperatorsList.split(',');
  const extraOperatorsNames = extraOperatorsNamesList.split(',');
  const numbers = numbersList.split(',');

  const getOperatorIndex = (element, items) => items.indexOf(element);
  const getOperatorName = (operatorIndex, items) => items[operatorIndex];

  const calculatorButtons = numbers.concat(basicOperators.concat(extraOperators));
  const renderCalculatorButtons = calculatorButtons
    .map((calculatorButton, index) => {
      let buttonClasses = '';

      if (!numbers.includes(calculatorButton)) {
        if (basicOperators.includes(calculatorButton)) {
          const operatorIndex = getOperatorIndex(calculatorButton, basicOperators);
          const operatorName = getOperatorName(operatorIndex, basicOperatorsNames);
          buttonClasses = `${operatorName} basicOperator`;
        } else {
          const operatorIndex = getOperatorIndex(calculatorButton, extraOperators);
          const operatorName = getOperatorName(operatorIndex, extraOperatorsNames);
          buttonClasses = operatorName;
        }
      } else {
        buttonClasses = `nm${calculatorButton}`;
      }

      return (
        <Button
          key={calculatorButton}
          name={calculatorButton}
          classType={buttonClasses}
          tbindex={index + 2}
        />
      );
    });

  return (
    <div className="calculator">
      <Display tbindex={1} />
      {renderCalculatorButtons}
    </div>
  );
};

export default Calculator;
