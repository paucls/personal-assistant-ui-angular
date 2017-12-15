import * as times from 'lodash/times';

export abstract class FixtureFactory<T> {

  /**
   * Builds a fixture object populating all its attributes with fake values.
   */
  abstract build(attributes?): T;

  /**
   * Builds a collection of fixture objects.
   */
  buildList(size: number, attributes?): T[] {
    return times(size, () => this.build(attributes));
  }

}
