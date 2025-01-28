import { useState } from 'react';
import { Table, Button } from '@mantine/core';
import { IconHexagonPlus, IconHexagonMinus } from '@tabler/icons-react';

export type Purchase = {
  name: string;
  cost: number;
}

type Dictionary = { [key: string]: number };

const purchases: Dictionary = {
};

var totalCost = 0;

export default function Calculator({elements}: {elements: Purchase[]}) {
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
    >
      <Table.Td>{element.name}</Table.Td>
      <Table.Td style={{textAlign: "center"}}>{element.cost}</Table.Td>
      <Table.Td style={{textAlign: "center"}}><span>{state.purchases[element.name]}</span></Table.Td>
      <Table.Td>
        <Button rightSection={<IconHexagonPlus/>} onClick={() => incrementValue(element.name, element.cost)}></Button>
      </Table.Td>
      <Table.Td>
        <Button rightSection={<IconHexagonMinus/>} onClick={() => decrementValue(element.name, element.cost)}></Button>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <span>Total cost: {state.totalCost} </span>
      <Table> 
        <Table.Thead>
          <Table.Tr>
            <Table.Th style={{width: "30%"}}>Purchase</Table.Th>
            <Table.Th style={{width: "30px"}}>Cost</Table.Th>
            <Table.Th style={{width: "30px"}}>Count</Table.Th>
            <Table.Th style={{width: "30px"}}></Table.Th>
            <Table.Th style={{width: "30px"}}></Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </>
  );
}