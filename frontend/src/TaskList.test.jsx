import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux'; // For Redux
import store from '../store'; // For Redux
import List from './List';
import { useSelector } from 'react-redux';
describe('List Component', () => {
  it('renders a list of tasks', () => {
    
 const {tasks}  = useSelector((state)=> state.list);


    // Render the component with sample data and the Redux store
    render(
      <Provider store={store}>
        <List />
      </Provider>
    );

    
    // Check if the component renders the list properly
    const taskList = screen.getByText('List Of Task');
    expect(taskList).toBeInTheDocument();

    // Check if the component displays the task names correctly
    tasks.forEach((task, i) => {
      const taskName = screen.getByText(task.name);
      expect(taskName).toBeInTheDocument();

      // Check if the status button appears correctly based on task status
      const statusButton = screen.getByText(
        task.status === 0 ? 'click to task complete' : 'Task Completed'
      );
      expect(statusButton).toBeInTheDocument();

      // Check if the click event is working for the button
      if (task.status === 0) {
        const button = screen.getByText('click to task complete');
        fireEvent.click(button);
        // Add your expectations for what should happen when the button is clicked
      }
    });
  });
});
