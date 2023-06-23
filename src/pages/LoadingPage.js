import React from 'react';
import loading from '../assets/images/loading.gif'


export default function loadingPage() {
    return (
        <div class="loading-page-container">
                <img class="loading" src={loading}></img>
        </div>
    )
}