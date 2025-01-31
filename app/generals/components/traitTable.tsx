import { useState } from 'react';
import { Table, Button } from '@mantine/core';
import { IconHexagonPlus, IconHexagonMinus } from '@tabler/icons-react';

export type Trait = {
  name: string;
  description: string;
}

const elements : Trait[] = [
    {
        name: "Inspired Fighter",
        description: "One per battle may add a Green die to a single combat, but if the enemy rull includes a skull, they are killed and are replaced by a 2* subordinate."
    },
    {
        name: "Diplomacy Expert",
        description: "Re-roll any agent dice rolled for any agents within 4 land regions."
    },
    {
        name: "Battlefield Expert",
        description: "Increase or decrease the difficult terrain by one level."
    },
    {
        name: "Morale Booster",
        description: "Remove one wound once per battle."
    },
    {
        name: "Scouting Expert",
        description: "One extra reveal."
    },
    {
        name: "Never Give Up",
        description: "Army may go down to a single main battle card."
    },
    {
        name: "Mercenary Loyalty",
        description: "Mercenaries immune to card effects from enemy and cost one gold each in a bribe."
    },
]

export default function TraitTable() {
  
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td><b>{element.name}</b></Table.Td>
      <Table.Td>{element.description}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Table> 
        <Table.Thead>
          <Table.Tr>
            <Table.Th style={{width: "30%"}}>Trait/Characteristic</Table.Th>
            <Table.Th style={{width: "30px"}}>Description</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </>
  );
}