import Button from './Button';
import Display from './Display';

const Calculator = () => {
  const basicOperatorsList = '=,+,-,x,÷';
  const extraOperatorsList = '.,%,+/-,AC';
  const numbersList = '0,1,2,3,4,5,6,7,8,9';

  const basicOperators = basicOperatorsList.split(',');
  const extraOperators = extraOperatorsList.split(',');
  const numbers = numbersList.split(',');

  const calculatorButtons = numbers.concat(basicOperators.concat(extraOperators));
  const renderCalculatorButtons = calculatorButtons
    .map((calculatorButton) => (
      <Button
        key={calculatorButton}
        name={calculatorButton}
        classType={basicOperators.includes(calculatorButton) ? 'basicOperator' : ''}
      />
    ));

  return (
    <div className="calculator">
      <Display />
      {renderCalculatorButtons}
    </div>
  );
};

export default Calculator;
