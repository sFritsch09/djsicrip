import React, { useState } from 'react';
import { ImQuestion } from 'react-icons/im';

import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import {
	ContentWrapper,
	FaqContainer,
	FaqMain,
	IconWrapper,
	QuestWrapper,
	TextWrapper,
	TextContainer,
	HyperLink,
} from './about-me.styles';

const items = [
	{
		question: 'Wie lange legst du schon auf?',
		answer: 'Ich lege schon seit 10 Jahren auf.',
	},
	{
		question: 'Welche Musik hörst du am liebsten?',
		answer: 'Ich höre gern Soulful House und Disco House. Was ich genau höre findest du hier:',
		linkText: 'Music',
		link: '/music',
	},
	{
		question: 'Welche Musik spielst du am liebsten?',
		answer:
			'Ich spiele am liebsten meine Ladies Playlist, wo alle mit singen/tanzen und ich die verrückte Seite meines Pupliukums herauskitzle.',
	},
	{
		question: 'Wie kamst du zum Auflegen?',
		answer:
			'Zum aller ersten Mal legte ich durch mein Bruder auf Uni Partys auf und lernte die ersten Schritte für saubere Übergänge mit einem kostenlosen Programm (Virtual DJ).',
	},
	{
		question: 'Was für ein DJ bist du?',
		answer:
			'Ich bin Hip Hop DJ, daher lege ich mit Plattenspieler auf. Für ein kreatives Mixing kann natürlich auch House, Pop, Rock, etc. gespielt werden.',
	},
	{
		question: 'Was kostet mich ein Auftritt für einen Geburtstag?',
		answer: 'Die Preise für einen Geburtstag oder anderen Veranstaltungen findest du hier:',
		linkText: 'Preise',
		link: '/price',
	},
	{
		question: 'Kann ich mir auch eine Soundanlage mieten ohne DJ?',
		answer: 'Klar, das Equipment findest du hier:',
		linkText: 'Equipment',
		link: '/equipment',
	},
	{
		question: 'Wie kann ich dich am Besten buchen?',
		answer: 'Unter folgendem Link findest du die frei verfügbaren Termine:',
		linkText: 'Book Now',
		link: '/booking',
	},
	{
		question: 'Kannst du mir auch solch eine coole Webseite entwerfen?',
		answer:
			'Meine Webseite habe ich selbst entworfen Frontend + Backend und für Anfragen findest du hier meine Kontaktdaten:',
		linkText: 'Kontakt',
		link: '#',
	},
];

const FAQ = () => {
	return (
		<FaqMain>
			<AnimateSharedLayout>
				<FaqContainer layout>
					{items.map((item) => (
						<Item
							key={item}
							text={item.question}
							answer={item.answer}
							link={item.link}
							linkText={item.linkText}
						/>
					))}
				</FaqContainer>
			</AnimateSharedLayout>
		</FaqMain>
	);
};

function Item({ text, answer, link, linkText }) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => setIsOpen(!isOpen);

	return (
		<ContentWrapper layout onClick={toggleOpen}>
			<QuestWrapper layout>
				<IconWrapper>{<ImQuestion />}</IconWrapper>
				{text}
			</QuestWrapper>
			<AnimatePresence>
				{isOpen && <Content text={answer} link={link} linkText={linkText} />}
			</AnimatePresence>
		</ContentWrapper>
	);
}

function Content({ text, link, linkText }) {
	return (
		<TextContainer layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
			<TextWrapper>
				{text}
				{link ? <HyperLink to={link}>{linkText}</HyperLink> : null}
			</TextWrapper>
		</TextContainer>
	);
}

export default FAQ;
