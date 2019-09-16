import React from 'react';
import Item from './Item';

export default function List({ posts }) {
    return (
        <div>
            {posts.map((post) => <Item key={post.id} post={post} />)}
        </div>
    )
}
