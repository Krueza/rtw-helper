'use client'

import { Text, Image, Divider, Accordion, Group, Avatar, AccordionPanel } from '@mantine/core'
import classes from './Agents.module.css';
import { IconArrowDown, IconArrowsVertical, IconChevronCompactDown, IconChevronDown, IconPlus } from '@tabler/icons-react';

const agentActions = [
    {
        icon: "treaty",
        header: "TREATY: Move your agent to another player’s:",
        location: "agent or home region with gold value 2+.",
        action: "Request an upgrade from enemy to neutral, neutral to friendly, or friendly to ally. If opponent agrees, move the faction marker up on both diplomacy trackers on your faction boards."
    },
    {
        icon: "trade",
        header: "TRADE: Move your agent to another player’s:",
        location: "agent or home region of a non-enemy faction.",
        action: "If factions are a) neutral: gain 2 gold each; b) friendly = gain 3 gold Each; c) ally = gain 4 gold each. Add market effects +1 gold for each market you have at a port. Only one trade with each other faction can be initiated by a player in their turn (i.e. Rome can trade with Carthage in Rome’s turn and later Carthage can trade with Rome in Carthage’s turn, but Carthage cannot do two trades with Rome in its own turn)."
    },
    {
        icon: "spy",
        header: "SPY: Move your agent to another player’s:",
        location: "army",
        action: "The opponent shows you all the cards in that army. You can share this view with an ally."
    },
    {
        icon: "protests",
        header: "PROTESTS: Move your agent to another player’s:",
        location: "region.",
        action: "Place 1 unrest marker in region."
    },
    {
        icon: "riots",
        header: "RIOTS: Move your agent to another player’s:",
        location: "region",
        action: "Place 2 unrest markers in the region."
    },
    {
        icon: "rebeluprising",
        header: "REBEL UPRISING: Move your agent to another player’s: ",
        location: "enemy controlled region.",
        action: "Any enemy army present takes damage from the region’s defence roll, if no army present thereafter, remove any control marker, as it has become an independent region again, or if a home region it returns to the original owner."
    },
    {
        icon: "bribe",
        header: "BRIBE: Move your agent to another player’s:",
        location: "army or region.",
        action: "Bribe Army: Spend 1 gold per non-mercenary troop card in the army, plus 1 gold per star rating of the enemy general. Roll a RED die. If a Skull, the army loses all mercenary cards and half of its other troop cards rounded down, and you may move the remaining army up to 2 regions. Bribe Region: Spend 2 gold per garrison die. Roll a RED die. If the roll is a success, the region changes to your ownership. An X your agent dies, and S your agent survives."
    },
    {
        icon: "sabotage",
        header: "SABOTAGE: Move your agent to another player’s:",
        location: "market or barracks.",
        action: "Roll a RED die. If a Skull, the market or barracks is removed. An X your agent dies, and S your agent survives."
    },
    {
        icon: "doubleagent",
        header: "DOUBLE AGENT: Move your agent to another player’s:",
        location: "agent",
        action: "opponent’s agent is sent back to their capital and may do nothing more this round."
    },
    {
        icon: "sowdistrust",
        header: "SOW DISTRUST: Move your agent to another player’s: ",
        location: "capital region",
        action: "Change the diplomatic status of that faction and a friend or ally down a level to minimum of neutral (you cannot make them enemies)."
    },
    {
        icon: "recruitmercenaries",
        header: "RECRUIT MERCENARIES: Move your agent to:",
        location: "a mercenary region within 4 land regions of one of your armies.",
        action: "Buy a non-veteran mercenary card of your choice from that region into your army, cards permitting. In addition, this agent action can be used to recruit one of the four special cards in the mercenary deck (2 x War Dogs, 1 x Incendiary Pigs and 1 x Flaming Logs) into an army at a 2+ gold region where your agent is present, paying the gold recruitment cost on the card at the time."
    },
    {
        icon: "assassination",
        header: "ASSASSINATION: Move your agent to another player’s:",
        location: "general or agent.",
        action: "When a general is the target, roll 1 RED die; when an agent is the target, roll 2 RED dice and take the best result. If a Skull, the general or agent is killed, an X your agent dies, an S your agent survives. If the opposing general was competent or better (3*+), a mediocre general (2*) takes their place, otherwise they are left without a general."
    },
    {
        icon: "treasurytheft",
        header: "TREASURY THEFT: Move your agent to another player’s:",
        location: "highest gold value region.",
        action: "Roll a RED die. If a Skull, the opponent hands over half their gold rounded up. An X your agent dies, and S your agent survives."
    },

]

interface AccordionLabelProps {
    header: string;
    icon: string;
    location: string;
  }

function AccordionLabel({ header, icon, location }: AccordionLabelProps) {
    return (
      <Group wrap="nowrap">
        <Avatar 
            src={`img/agentactions/${icon}.png`} 
             radius="xl" size="lg" />
        <div >
          <Text><b>{header}</b> {location}</Text>
        </div>
      </Group>
    );
  }


export default function AgentActionsPage() {
    const accordianItems = agentActions.map((item) => (
        <Accordion.Item 
            key={item.icon} 
            value={item.icon} 
            style={{margin: "10px", width: "50vw", minWidth: "300px"}}>
          <Accordion.Control>
            <AccordionLabel {...item} />
          </Accordion.Control>
          <Accordion.Panel>
            <Text size="sm">
                <b>Action: </b>{item.action}
            </Text>
          </Accordion.Panel>
        </Accordion.Item>
      ));

    return (

        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center" }}>
            <Accordion 
                variant="contained"
                classNames={{ chevron: classes.chevron }}>
                    {accordianItems}
            </Accordion>
        </div>
    );
}