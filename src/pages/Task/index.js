import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTask, create } from '../../../reducers/taskReducer';
import { editTask, createTask } from '../../../api/index';
import Table from '../../components/Table';

export const Task = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTask);
  useEffect(() => {
    dispatch({ type: 'FETCH_ALL_TASKS', payload: tasks });
  }, []);
  return (
    <Table/>
  );
};
