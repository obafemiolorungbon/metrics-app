import styled from "styled-components";

const BarChartContainer = styled.div`
  width: 100%;
`;

const BarsContainer = styled.div`
  width: 100%;
  background-color: #f1f1f1;
  height: 15px;
  border-radius: 5px;
  display: flex;
`;

const BarLabelWrapper = styled.div`
  margin-top: 1.5rem;
  width: 100%;
`;

const BarLabelParent = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
`;

const BarLabelBox = styled.div`
  width: 15%;
  display: flex;
`;

const BarLabelSquare = styled.div`
  width: 12px;
  height: 12px;
  background-color: ${(props) => props.background};
  margin-right: 0.5rem;
  border-radius: 0.15rem;
  padding-top: 2px;
`;
const BarLabelText = styled.p`
  line-height: 1;
  font-weight: 600;
`;

export const BarGroup = ({ data }) => {
  const total = data.reduce(
    (prevValue, currentValue) => prevValue + currentValue.count,
    0
  );

  const colorMapping = {
    0: "red",
    1: "blue",
    2: "green",
  };

  return (
    <BarChartContainer>
      <BarsContainer>
        {data.map((dataObject, index) => (
          <div
            key={index}
            className=""
            style={{
              width: `${(dataObject.count / total) * 100}%`,
              backgroundColor: colorMapping[index],
              height: "100%",
              marginRight: "0.1%",
            }}
          ></div>
        ))}
      </BarsContainer>
      <BarLabelWrapper>
        <BarLabelParent>
          {data.map((dataObject, index) => (
            <BarLabelBox key={index}>
              <BarLabelSquare background={colorMapping[index]}></BarLabelSquare>
              <BarLabelText>
                {dataObject.code ? `Error ${dataObject.code}` : "others"}:{" "}
                {dataObject.count}
              </BarLabelText>
            </BarLabelBox>
          ))}
        </BarLabelParent>
      </BarLabelWrapper>
    </BarChartContainer>
  );
};
