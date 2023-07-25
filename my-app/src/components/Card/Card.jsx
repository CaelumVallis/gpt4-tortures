import CardField from './CardField';
import { withStripeErrorHandling } from '../utils/withStripeErrorHandling';

const Card = withStripeErrorHandling(CardField);

export default Card;
