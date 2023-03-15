import React from 'react'
import { Backdrop, Label } from './styles'
import { useMapState } from '@/hooks/redux.hook'
import { LoadingStateInterface } from '@/store/@interfaces/loading.interface'

const AppLoading: React.FC = () => {
    const { isLoading, message } = useMapState(
        'loading'
    ) as LoadingStateInterface

    return (
        <>
            {isLoading ? (
                <Backdrop>
                    <Label>{message || 'Loading...'}</Label>
                </Backdrop>
            ) : (
                <></>
            )}
        </>
    )
}

export default AppLoading
