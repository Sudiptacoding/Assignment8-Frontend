import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Container } from '../../components/DragAndDrop/Container';


const Dashboard = () => {
    return (
        <div>
            <DndProvider backend={HTML5Backend}>
                <Container></Container>
            </DndProvider>
        </div>
    );
};

export default Dashboard;