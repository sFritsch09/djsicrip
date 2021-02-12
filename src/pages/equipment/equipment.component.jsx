import React from 'react';
import Gallery from '../../components/gallery/gallery.component';

import Controller1 from '../../images/equipment/KontrollS2Front.png';
import Soundboks from '../../images/equipment/SoundBoks.webp';

const Equipment = () => {
	return (
		<React.Fragment>
			<div style={{ paddingTop: '80px' }} />

			<Gallery
				header="DJ Controller"
				desc="Traktor Kontrol S2 MK3 von Native Instruments"
				image={Controller1}
				title="Traktor Kontrol S2 MK3"
			/>
			<Gallery header="Soundanlage" desc="Soundboks 3" image={Soundboks} title="Soundboks 3" />
			<Gallery header="Soundanlage" desc="Soundboks 3" image={Soundboks} title="Soundboks 3" />
		</React.Fragment>
	);
};

export default Equipment;
