import { Component } from '@stencil/core';


@Component({
    tag: 'spi-root',
    styleUrl: 'spi-root.scss'
})
export class SpiRoot {
    
    render() {
        return (
            <div>
                <spi-header></spi-header>

                <p>Welcome in SPI ADM !</p>
            </div>
        );
    }
}