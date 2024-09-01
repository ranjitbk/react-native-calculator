export const handleCalculatorLogic = (state, setState, type, value) => {
  const { currentValue, operator, previousValue } = state;

  const handleClear = () => {
    setState({
      currentValue: "0",
      operator: null,
      previousValue: null,
    });
  };

  const handlePosNeg = () => {
    setState({
      ...state,
      currentValue: `${parseFloat(currentValue) * -1}`,
    });
  };

  const handlePercentage = () => {
    setState({
      ...state,
      currentValue: `${parseFloat(currentValue) * 0.01}`,
    });
  };

  const handleOperator = (operator) => {
    setState({
      previousValue: currentValue,
      operator: operator,
      currentValue: "0",
    });
  };

  const handleEqual = () => {
    const current = parseFloat(currentValue);
    const previous = parseFloat(previousValue);

    let result = 0;
    if (operator === "+") {
      result = previous + current;
    } else if (operator === "-") {
      result = previous - current;
    } else if (operator === "*") {
      result = previous * current;
    } else if (operator === "/") {
      result = previous / current;
    }

    setState({
      currentValue: `${result}`,
      operator: null,
      previousValue: null,
    });
  };

  const handleNumber = (number) => {
    setState({
      ...state,
      currentValue:
        currentValue === "0" ? `${number}` : `${currentValue}${number}`,
    });
  };

  const handleDot = () => {
    if (!currentValue.include(".")) {
      setState({
        ...state,
        currentValue: `${currentValue}`,
      });
    }
  };

  switch (type) {
    case "clear":
      handleClear();
      break;
    case "posneg":
      handlePosNeg();
      break;
    case "percentage":
      handlePercentage();
      break;
    case "operator":
      handleOperator(value);
      break;
    case "equal":
      handleEqual();
      break;
    case "number":
      handleNumber(value);
      break;
    case "dot":
      handleDot();
      break;
    default:
      break;
  }
};
