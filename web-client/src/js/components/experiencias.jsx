import * as React from 'react';
import {ExperienceCard} from "./experienceCard";

export const Experiencias = (props) => (
    <section className="experienciesSection">
        {props.experiencias.map(experiencia =>
            <ExperienceCard experiencia={experiencia}/>
        )}
    </section>
);