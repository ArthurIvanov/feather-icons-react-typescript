import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from '@ailibs/feather-react-ts';

import './styles.css';

const Icons = () => {
    const color = '#1e1e35';
    return (
        <div className="grid">
            <Icon
                name="activity"
                onClick={() => alert('Clicked!')}
                className="red"
            />

            <Icon color={color} name="airplay" />

            <Icon color={color} name="alert-circle" />

            <Icon color={color} name="alert-octagon" />

            <Icon color={color} name="alert-triangle" />

            <Icon color={color} name="align-center" />

            <Icon color={color} name="align-justify" />

            <Icon color={color} name="align-left" />

            <Icon color={color} name="align-right" />

            <Icon color={color} name="anchor" />

            <Icon color={color} name="aperture" />

            <Icon color={color} name="archive" />

            <Icon color={color} name="arrow-down-circle" />

            <Icon color={color} name="arrow-down-left" />

            <Icon color={color} name="arrow-down-right" />

            <Icon color={color} name="arrow-down" />

            <Icon color={color} name="arrow-left-circle" />

            <Icon color={color} name="arrow-left" />

            <Icon color={color} name="arrow-right-circle" />

            <Icon color={color} name="arrow-right" />

            <Icon color={color} name="arrow-up-circle" />

            <Icon color={color} name="arrow-up-left" />

            <Icon color={color} name="arrow-up-right" />

            <Icon color={color} name="arrow-up" />

            <Icon color={color} name="at-sign" />

            <Icon color={color} name="award" />

            <Icon color={color} name="bar-chart-2" />

            <Icon color={color} name="bar-chart" />

            <Icon color={color} name="battery-charging" />

            <Icon color={color} name="battery" />

            <Icon color={color} name="bell-off" />

            <Icon color={color} name="bell" />

            <Icon color={color} name="bluetooth" />

            <Icon color={color} name="bold" />

            <Icon color={color} name="book-open" />

            <Icon color={color} name="book" />

            <Icon color={color} name="bookmark" />

            <Icon color={color} name="box" />

            <Icon color={color} name="briefcase" />

            <Icon color={color} name="calendar" />

            <Icon color={color} name="camera-off" />

            <Icon color={color} name="camera" />

            <Icon color={color} name="cast" />

            <Icon color={color} name="check-circle" />

            <Icon color={color} name="check-square" />

            <Icon color={color} name="check" />

            <Icon color={color} name="chevron-down" />

            <Icon color={color} name="chevron-left" />

            <Icon color={color} name="chevron-right" />

            <Icon color={color} name="chevron-up" />

            <Icon color={color} name="chevrons-down" />

            <Icon color={color} name="chevrons-left" />

            <Icon color={color} name="chevrons-right" />

            <Icon color={color} name="chevrons-up" />

            <Icon color={color} name="chrome" />

            <Icon color={color} name="circle" />

            <Icon color={color} name="clipboard" />

            <Icon color={color} name="clock" />

            <Icon color={color} name="cloud-drizzle" />

            <Icon color={color} name="cloud-lightning" />

            <Icon color={color} name="cloud-off" />

            <Icon color={color} name="cloud-rain" />

            <Icon color={color} name="cloud-snow" />

            <Icon color={color} name="cloud" />

            <Icon color={color} name="code" />

            <Icon color={color} name="codepen" />

            <Icon color={color} name="codesandbox" />

            <Icon color={color} name="coffee" />

            <Icon color={color} name="columns" />

            <Icon color={color} name="command" />

            <Icon color={color} name="compass" />

            <Icon color={color} name="copy" />

            <Icon color={color} name="corner-down-left" />

            <Icon color={color} name="corner-down-right" />

            <Icon color={color} name="corner-left-down" />

            <Icon color={color} name="corner-left-up" />

            <Icon color={color} name="corner-right-down" />

            <Icon color={color} name="corner-right-up" />

            <Icon color={color} name="corner-up-left" />

            <Icon color={color} name="corner-up-right" />

            <Icon color={color} name="cpu" />

            <Icon color={color} name="credit-card" />

            <Icon color={color} name="crop" />

            <Icon color={color} name="crosshair" />

            <Icon color={color} name="database" />

            <Icon color={color} name="delete" />

            <Icon color={color} name="disc" />

            <Icon color={color} name="dollar-sign" />

            <Icon color={color} name="download-cloud" />

            <Icon color={color} name="download" />

            <Icon color={color} name="droplet" />

            <Icon color={color} name="edit-2" />

            <Icon color={color} name="edit-3" />

            <Icon color={color} name="edit" />

            <Icon color={color} name="external-link" />

            <Icon color={color} name="eye-off" />

            <Icon color={color} name="eye" />

            <Icon color={color} name="facebook" />

            <Icon color={color} name="fast-forward" />

            <Icon color={color} name="feather" />

            <Icon color={color} name="figma" />

            <Icon color={color} name="file-minus" />

            <Icon color={color} name="file-plus" />

            <Icon color={color} name="file-text" />

            <Icon color={color} name="file" />

            <Icon color={color} name="film" />

            <Icon color={color} name="filter" />

            <Icon color={color} name="flag" />

            <Icon color={color} name="folder-minus" />

            <Icon color={color} name="folder-plus" />

            <Icon color={color} name="folder" />

            <Icon color={color} name="framer" />

            <Icon color={color} name="frown" />

            <Icon color={color} name="gift" />

            <Icon color={color} name="git-branch" />

            <Icon color={color} name="git-commit" />

            <Icon color={color} name="git-merge" />

            <Icon color={color} name="git-pull-request" />

            <Icon color={color} name="github" />

            <Icon color={color} name="gitlab" />

            <Icon color={color} name="globe" />

            <Icon color={color} name="grid" />

            <Icon color={color} name="hard-drive" />

            <Icon color={color} name="hash" />

            <Icon color={color} name="headphones" />

            <Icon color={color} name="heart" />

            <Icon color={color} name="help-circle" />

            <Icon color={color} name="hexagon" />

            <Icon color={color} name="home" />

            <Icon color={color} name="image" />

            <Icon color={color} name="inbox" />

            <Icon color={color} name="info" />

            <Icon color={color} name="instagram" />

            <Icon color={color} name="italic" />

            <Icon color={color} name="key" />

            <Icon color={color} name="layers" />

            <Icon color={color} name="layout" />

            <Icon color={color} name="life-buoy" />

            <Icon color={color} name="link-2" />

            <Icon color={color} name="link" />

            <Icon color={color} name="linkedin" />

            <Icon color={color} name="list" />

            <Icon color={color} name="loader" />

            <Icon color={color} name="lock" />

            <Icon color={color} name="log-in" />

            <Icon color={color} name="log-out" />

            <Icon color={color} name="mail" />

            <Icon color={color} name="map-pin" />

            <Icon color={color} name="map" />

            <Icon color={color} name="maximize-2" />

            <Icon color={color} name="maximize" />

            <Icon color={color} name="meh" />

            <Icon color={color} name="menu" />

            <Icon color={color} name="message-circle" />

            <Icon color={color} name="message-square" />

            <Icon color={color} name="mic-off" />

            <Icon color={color} name="mic" />

            <Icon color={color} name="minimize-2" />

            <Icon color={color} name="minimize" />

            <Icon color={color} name="minus-circle" />

            <Icon color={color} name="minus-square" />

            <Icon color={color} name="minus" />

            <Icon color={color} name="monitor" />

            <Icon color={color} name="moon" />

            <Icon color={color} name="more-horizontal" />

            <Icon color={color} name="more-vertical" />

            <Icon color={color} name="mouse-pointer" />

            <Icon color={color} name="move" />

            <Icon color={color} name="music" />

            <Icon color={color} name="navigation-2" />

            <Icon color={color} name="navigation" />

            <Icon color={color} name="octagon" />

            <Icon color={color} name="package" />

            <Icon color={color} name="paperclip" />

            <Icon color={color} name="pause-circle" />

            <Icon color={color} name="pause" />

            <Icon color={color} name="pen-tool" />

            <Icon color={color} name="percent" />

            <Icon color={color} name="phone-call" />

            <Icon color={color} name="phone-forwarded" />

            <Icon color={color} name="phone-incoming" />

            <Icon color={color} name="phone-missed" />

            <Icon color={color} name="phone-off" />

            <Icon color={color} name="phone-outgoing" />

            <Icon color={color} name="phone" />

            <Icon color={color} name="pie-chart" />

            <Icon color={color} name="play-circle" />

            <Icon color={color} name="play" />

            <Icon color={color} name="plus-circle" />

            <Icon color={color} name="plus-square" />

            <Icon color={color} name="plus" />

            <Icon color={color} name="pocket" />

            <Icon color={color} name="power" />

            <Icon color={color} name="printer" />

            <Icon color={color} name="radio" />

            <Icon color={color} name="refresh-ccw" />

            <Icon color={color} name="refresh-cw" />

            <Icon color={color} name="repeat" />

            <Icon color={color} name="rewind" />

            <Icon color={color} name="rotate-ccw" />

            <Icon color={color} name="rotate-cw" />

            <Icon color={color} name="rss" />

            <Icon color={color} name="save" />

            <Icon color={color} name="scissors" />

            <Icon color={color} name="search" />

            <Icon color={color} name="send" />

            <Icon color={color} name="server" />

            <Icon color={color} name="settings" />

            <Icon color={color} name="share-2" />

            <Icon color={color} name="share" />

            <Icon color={color} name="shield-off" />

            <Icon color={color} name="shield" />

            <Icon color={color} name="shopping-bag" />

            <Icon color={color} name="shopping-cart" />

            <Icon color={color} name="shuffle" />

            <Icon color={color} name="sidebar" />

            <Icon color={color} name="skip-back" />

            <Icon color={color} name="skip-forward" />

            <Icon color={color} name="slack" />

            <Icon color={color} name="slash" />

            <Icon color={color} name="sliders" />

            <Icon color={color} name="smartphone" />

            <Icon color={color} name="smile" />

            <Icon color={color} name="speaker" />

            <Icon color={color} name="square" />

            <Icon color={color} name="star" />

            <Icon color={color} name="stop-circle" />

            <Icon color={color} name="sun" />

            <Icon color={color} name="sunrise" />

            <Icon color={color} name="sunset" />

            <Icon color={color} name="tablet" />

            <Icon color={color} name="tag" />

            <Icon color={color} name="target" />

            <Icon color={color} name="terminal" />

            <Icon color={color} name="thermometer" />

            <Icon color={color} name="thumbs-down" />

            <Icon color={color} name="thumbs-up" />

            <Icon color={color} name="toggle-left" />

            <Icon color={color} name="toggle-right" />

            <Icon color={color} name="tool" />

            <Icon color={color} name="trash-2" />

            <Icon color={color} name="trash" />

            <Icon color={color} name="trello" />

            <Icon color={color} name="trending-down" />

            <Icon color={color} name="trending-up" />

            <Icon color={color} name="triangle" />

            <Icon color={color} name="truck" />

            <Icon color={color} name="tv" />

            <Icon color={color} name="twitch" />

            <Icon color={color} name="twitter" />

            <Icon color={color} name="type" />

            <Icon color={color} name="umbrella" />

            <Icon color={color} name="underline" />

            <Icon color={color} name="unlock" />

            <Icon color={color} name="upload-cloud" />

            <Icon color={color} name="upload" />

            <Icon color={color} name="user-check" />

            <Icon color={color} name="user-minus" />

            <Icon color={color} name="user-plus" />

            <Icon color={color} name="user-x" />

            <Icon color={color} name="user" />

            <Icon color={color} name="users" />

            <Icon color={color} name="video-off" />

            <Icon color={color} name="video" />

            <Icon color={color} name="voicemail" />

            <Icon color={color} name="volume-1" />

            <Icon color={color} name="volume-2" />

            <Icon color={color} name="volume-x" />

            <Icon color={color} name="volume" />

            <Icon color={color} name="watch" />

            <Icon color={color} name="wifi-off" />

            <Icon color={color} name="wifi" />

            <Icon color={color} name="wind" />

            <Icon color={color} name="x-circle" />

            <Icon color={color} name="x-octagon" />

            <Icon color={color} name="x-square" />

            <Icon color={color} name="x" />

            <Icon color={color} name="youtube" />

            <Icon color={color} name="zap-off" />

            <Icon color={color} name="zap" />

            <Icon color={color} name="zoom-in" />

            <Icon color={color} name="zoom-out" />
        </div>
    );
};

storiesOf('Icons', module).add('Icons', () => <Icons />);
