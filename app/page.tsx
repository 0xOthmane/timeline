import Timeline from '@/components/molecules/Timeline';
import { experiences } from './data';

export default function Home() {
  return (
    <div>
      <Timeline experiences={experiences} />
    </div>
  );
}
