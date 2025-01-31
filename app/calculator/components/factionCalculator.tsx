import { useState } from 'react';
import { Table, Button, Center } from '@mantine/core';
import { IconHexagonPlus, IconHexagonMinus } from '@tabler/icons-react';
import classes  from './factionCalculator.module.css'

export type Purchase = {
  name: string;
  cost: number;
}

type Dictionary = { [key: string]: number };

const purchases: Dictionary = {
};

export default function FactionCalculator({elements}: {elements: Purchase[]}) {
  const [state, setState] = useState({
    totalCost: 0,
    purchases: purchases,
});

  const incrementValue = (key: string, cost: number) => {
    console.log(state)
    setState(prevState => ({
      totalCost: prevState.totalCost + cost,
      purchases:
      {
        ...prevState.purchases,
        [key]: (prevState.purchases[key] || 0) + 1,
      }
    }));
  };

  const decrementValue = (key: string, cost: number) => {
    if (state.purchases[key] && state.purchases[key] >= 1)
    {
      setState(prevState => ({
        totalCost: prevState.totalCost - cost,
        purchases:
        {
          ...prevState.purchases,
          [key]: (prevState.purchases[key] || 0) - 1,
        }
      }));
    }
  };

  const rows = elements.map((element) => (
    <Table.Tr
      key={element.name}
      style={{textAlign: "center"}}
    >
      <Table.Td>{element.name}</Table.Td>
      <Table.Td style={{textAlign: "center"}}>{element.cost}</Table.Td>
      <Table.Td style={{textAlign: "center"}}><span>{state.purchases[element.name]}</span></Table.Td>
      <Table.Td>
        <Button className={classes.redbutton} onClick={() => incrementValue(element.name, element.cost)}><IconHexagonPlus/></Button>
      </Table.Td>
      <Table.Td style={{textAlign: "center"}}>
        <Button className={classes.redbutton} onClick={() => decrementValue(element.name, element.cost)}><IconHexagonMinus/></Button>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <div style={{width: "100%", marginTop: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{width: "100%", maxWidth: "1000px" }}>
          <span>Total cost: {state.totalCost} </span>
          <Table style={{maxWidth: "1000px"}}> 
            <Table.Thead>
              <Table.Tr>
                <Table.Th style={{width: "70%"}}>Purchase</Table.Th>
                <Table.Th style={{width: "10%"}}>Cost</Table.Th>
                <Table.Th style={{width: "10%"}}>Count</Table.Th>
                <Table.Th w="5%"></Table.Th>
                <Table.Th w="5%"></Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </div>
      </div>
    </>
  );
}