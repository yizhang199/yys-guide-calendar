import React from 'react';
import { useParams } from 'react-router-dom';
import Guides from '../../data/guides.json';

function Detail() {
  const { day } = useParams();
	
	const detail = Guides[day];

	if(!detail) return <div>No day</div>;

	return <div>{detail.intro}</div>;

}

export default Detail;
