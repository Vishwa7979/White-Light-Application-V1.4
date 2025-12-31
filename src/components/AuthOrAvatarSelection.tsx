import React, { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import AuthScreen from './AuthScreen';
import AvatarSelectionScreen from './AvatarSelectionScreen';

interface AuthOrAvatarSelectionProps {
  onAvatarSelect: (image: string) => void;
}

export default function AuthOrAvatarSelection({ onAvatarSelect }: AuthOrAvatarSelectionProps) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <AuthScreen onAuthComplete={() => window.location.reload()} />;
  }

  return <AvatarSelectionScreen onSelect={onAvatarSelect} />;
}
