import {useState} from 'react'
import { atom, useRecoilState, useRecoilValue } from 'recoil'
import {Element, Rectangle} from './components/Rectangle/Rectangle'
import { EditProperties } from './editProperties'
import {PageContainer} from './PageContainer'
import {Toolbar} from './Toolbar'

export const elementsState = atom<number[]>({
    key: 'elements',
    default: []
});

export type SetElement = (indexToSet: number, newElement: Element) => void

export const selectedElementState = atom<number | null>({
    key: 'selectedElement',
    default: null
});

function Canvas() {
    const elements = useRecoilValue(elementsState);
    const [selectedElement, setSelectedElement] = useRecoilState(selectedElementState);

    return (
    <PageContainer
        onClick={() => {
            setSelectedElement(null)
        }}
    >
        <Toolbar />
        <EditProperties />
        {elements.map((id) => (
            <Rectangle key={`id-${id}`} id={id} />
        ))}
    </PageContainer>
    )
}

export default Canvas