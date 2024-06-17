import { Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { colors } from "./../styles/styles";

const screenWidth = Dimensions.get("screen").width - 60;

const Chart = ({ inStock = 0, outOfStock = 0 }) => {
  const data = [
    {
      name: "Out of Stock",
      population: outOfStock,
      color: colors.pink,
      legendFontColor: colors.white,
    },
    {
      name: "In Stock",
      population: inStock,
      color: colors.darkPink,
      legendFontColor: colors.white,
    },
  ];

  const chartConfig = {
    color: (opacity = 1) => `rgba(26, 255, 126,${opacity})`,
  };
  return (
    <PieChart
      data={data}
      width={screenWidth}
      height={150}
      chartConfig={chartConfig}
      accessor={"population"}
      backgroundColor={colors.dark}
      paddingLeft={"15"}
      center={[10, 0]}
      absolute
      style={{
        borderRadius: 10,
      }}
    />
  );
};

export default Chart;
