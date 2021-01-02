import * as React from 'react';
import { storiesOf } from '@storybook/react';
import './styles.css';

const Intro = () => {
    return (
        <div className="text">
            <h3>
                Feather icons set for React apps with typechecking and auto
                complete
            </h3>
            <p>Created by Arthur Ivanov</p>
            <a href="https://github.com/ArthurIvanov/feather-icons-react-typescript">
                Link to repo
            </a>
        </div>
    );
};

storiesOf('Introduction', module).add('Introduction', () => <Intro />);
