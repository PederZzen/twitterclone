import React from 'react';
import { StyledTabs } from './style';

const Tab = () => {
    return (
        <StyledTabs
            defaultActiveKey = "1"
            items = {new Array(4).fill(null).map((_, i) => {
                    const tabArray = ['Tweets', 'Tweets & replies', 'Media', 'Likes'];
                    const id = String(i + 1);
                    return {
                        label: tabArray[i],
                        key: id,
                    };
            })}
        />
    )
}

export default Tab
