import React from 'react';
import { StrategicPartnersData } from '../../../shared/contents';
import { PartnerCard } from './PartnerCard';

interface Props { }

export const StrategicPartners: React.FC<Props> = () => {
	return (
		<section>
			<div className="mx-auto max-w-4xl">
				<h3 className="text-h3 font-semibold text-gray-e0e text-center pt-70 mb-70">Strategic Partners</h3>
				<div className="flex items-center justify-center md:flex-col mb-70">
					{StrategicPartnersData.map((partner) => (
						<PartnerCard key={partner.id} {...partner} />
					))}
				</div>
			</div>
		</section>
	);
};

