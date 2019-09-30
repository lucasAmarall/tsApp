import React from 'react';
import { Repository } from '../../store/ducks/repositories/types';

interface OwnProps {
  repository: Repository
};

export default function Repositoryitem({repository}: OwnProps) {
  return <li>{repository.name}</li>
}