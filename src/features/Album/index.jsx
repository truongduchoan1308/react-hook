import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Nhạc Soobin',
            thumbnailUrl: 'https://avatar-ex-swe.nixcdn.com/playlist/2022/11/04/4/4/2/9/1667537326043_300.jpg'
        },
        {
            id: 2,
            name: 'Nhạc Soobin',
            thumbnailUrl: 'https://avatar-ex-swe.nixcdn.com/playlist/2022/11/04/4/4/2/9/1667537326043_300.jpg'
        },
        {
            id: 3,
            name: 'Nhạc Soobin',
            thumbnailUrl: 'https://avatar-ex-swe.nixcdn.com/playlist/2022/11/04/4/4/2/9/1667537326043_300.jpg'
        },
    ]

    return (
        <div>
            <h2>Có thể bạn sẽ thích đấy</h2>
            <AlbumList albumList={albumList}></AlbumList>
        </div>
    );
}

export default AlbumFeature;