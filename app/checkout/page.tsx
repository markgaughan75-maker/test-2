'use client';

import { useEffect, useMemo, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

type PlanKey = 'free' | 'starter' | 'studio' | 'pro';
type Period = 'monthly' | 'yearly';

const PLAN_LABEL: Record<PlanKey, string> = {
  free: 'Free',
  starter: 'Starter',
  studio: 'Studio',
  pro: 'Pro',
};

export default function CheckoutPage() {
  const search = useSearchParams();
  const router = useRouter();

  const plan = (search.get('plan') as Plan
