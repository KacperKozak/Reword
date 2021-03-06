import React from 'react'
import styled from 'styled-components'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { purple, white } from '../../styles/colors'
import { Icon } from '../Icon'

type EditableListProps = {
    list: string[]
    onChange: (list: string[]) => void
}
export const EditableList = (props: EditableListProps) => (
    <DragDropContext
        onDragEnd={result => {
            if (!result.destination) return

            const items = reorder(
                props.list,
                result.source.index,
                result.destination.index
            )
            props.onChange(items)
        }}
    >
        <Droppable droppableId="droppable">
            {(provided, snapshot) => (
                <List {...provided.droppableProps} ref={provided.innerRef}>
                    {props.list.map((item, index) => (
                        <Draggable key={item} draggableId={item} index={index}>
                            {(provided, snapshot) => (
                                <ListElement
                                    key={index}
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={provided.draggableProps.style}
                                >
                                    {item}
                                    <Cross
                                        onClick={() => {
                                            props.onChange(remove(props.list, index))
                                        }}
                                    >
                                        <Icon name="Cross" size="normal" />
                                    </Cross>
                                </ListElement>
                            )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                </List>
            )}
        </Droppable>
    </DragDropContext>
)

const remove = (list: string[], index: number) => list.filter((el, i) => index !== i)

const reorder = (list: string[], startIndex: number, endIndex: number) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
}

const List = styled.div``
const ListElement = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
`
const Cross = styled.button`
    border: none;
    padding: 4px;
    width: 32px;
    color: ${purple};
    background: none;
`
