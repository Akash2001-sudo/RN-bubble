export const randomColor = () => {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A8", "#A833FF", "#33FFF5"];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  