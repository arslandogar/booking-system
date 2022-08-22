/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/': {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  '/bookings': {
    get: {
      parameters: {
        query: {
          id?: parameters['rowFilter.bookings.id'];
          name?: parameters['rowFilter.bookings.name'];
          email?: parameters['rowFilter.bookings.email'];
          phone?: parameters['rowFilter.bookings.phone'];
          numOfAdults?: parameters['rowFilter.bookings.numOfAdults'];
          numOfChildren?: parameters['rowFilter.bookings.numOfChildren'];
          paymentMethod?: parameters['rowFilter.bookings.paymentMethod'];
          tourId?: parameters['rowFilter.bookings.tourId'];
          /** Filtering Columns */
          select?: parameters['select'];
          /** Ordering */
          order?: parameters['order'];
          /** Limiting and Pagination */
          offset?: parameters['offset'];
          /** Limiting and Pagination */
          limit?: parameters['limit'];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters['range'];
          /** Limiting and Pagination */
          'Range-Unit'?: parameters['rangeUnit'];
          /** Preference */
          Prefer?: parameters['preferCount'];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions['bookings'][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** bookings */
          bookings?: definitions['bookings'];
        };
        query: {
          /** Filtering Columns */
          select?: parameters['select'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters['rowFilter.bookings.id'];
          name?: parameters['rowFilter.bookings.name'];
          email?: parameters['rowFilter.bookings.email'];
          phone?: parameters['rowFilter.bookings.phone'];
          numOfAdults?: parameters['rowFilter.bookings.numOfAdults'];
          numOfChildren?: parameters['rowFilter.bookings.numOfChildren'];
          paymentMethod?: parameters['rowFilter.bookings.paymentMethod'];
          tourId?: parameters['rowFilter.bookings.tourId'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters['rowFilter.bookings.id'];
          name?: parameters['rowFilter.bookings.name'];
          email?: parameters['rowFilter.bookings.email'];
          phone?: parameters['rowFilter.bookings.phone'];
          numOfAdults?: parameters['rowFilter.bookings.numOfAdults'];
          numOfChildren?: parameters['rowFilter.bookings.numOfChildren'];
          paymentMethod?: parameters['rowFilter.bookings.paymentMethod'];
          tourId?: parameters['rowFilter.bookings.tourId'];
        };
        body: {
          /** bookings */
          bookings?: definitions['bookings'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  '/facilities': {
    get: {
      parameters: {
        query: {
          id?: parameters['rowFilter.facilities.id'];
          name?: parameters['rowFilter.facilities.name'];
          tourId?: parameters['rowFilter.facilities.tourId'];
          /** Filtering Columns */
          select?: parameters['select'];
          /** Ordering */
          order?: parameters['order'];
          /** Limiting and Pagination */
          offset?: parameters['offset'];
          /** Limiting and Pagination */
          limit?: parameters['limit'];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters['range'];
          /** Limiting and Pagination */
          'Range-Unit'?: parameters['rangeUnit'];
          /** Preference */
          Prefer?: parameters['preferCount'];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions['facilities'][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** facilities */
          facilities?: definitions['facilities'];
        };
        query: {
          /** Filtering Columns */
          select?: parameters['select'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters['rowFilter.facilities.id'];
          name?: parameters['rowFilter.facilities.name'];
          tourId?: parameters['rowFilter.facilities.tourId'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters['rowFilter.facilities.id'];
          name?: parameters['rowFilter.facilities.name'];
          tourId?: parameters['rowFilter.facilities.tourId'];
        };
        body: {
          /** facilities */
          facilities?: definitions['facilities'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  '/tours': {
    get: {
      parameters: {
        query: {
          id?: parameters['rowFilter.tours.id'];
          name?: parameters['rowFilter.tours.name'];
          city?: parameters['rowFilter.tours.city'];
          description?: parameters['rowFilter.tours.description'];
          price?: parameters['rowFilter.tours.price'];
          duration?: parameters['rowFilter.tours.duration'];
          startDate?: parameters['rowFilter.tours.startDate'];
          endDate?: parameters['rowFilter.tours.endDate'];
          /** Filtering Columns */
          select?: parameters['select'];
          /** Ordering */
          order?: parameters['order'];
          /** Limiting and Pagination */
          offset?: parameters['offset'];
          /** Limiting and Pagination */
          limit?: parameters['limit'];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters['range'];
          /** Limiting and Pagination */
          'Range-Unit'?: parameters['rangeUnit'];
          /** Preference */
          Prefer?: parameters['preferCount'];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions['tours'][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** tours */
          tours?: definitions['tours'];
        };
        query: {
          /** Filtering Columns */
          select?: parameters['select'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters['rowFilter.tours.id'];
          name?: parameters['rowFilter.tours.name'];
          city?: parameters['rowFilter.tours.city'];
          description?: parameters['rowFilter.tours.description'];
          price?: parameters['rowFilter.tours.price'];
          duration?: parameters['rowFilter.tours.duration'];
          startDate?: parameters['rowFilter.tours.startDate'];
          endDate?: parameters['rowFilter.tours.endDate'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters['rowFilter.tours.id'];
          name?: parameters['rowFilter.tours.name'];
          city?: parameters['rowFilter.tours.city'];
          description?: parameters['rowFilter.tours.description'];
          price?: parameters['rowFilter.tours.price'];
          duration?: parameters['rowFilter.tours.duration'];
          startDate?: parameters['rowFilter.tours.startDate'];
          endDate?: parameters['rowFilter.tours.endDate'];
        };
        body: {
          /** tours */
          tours?: definitions['tours'];
        };
        header: {
          /** Preference */
          Prefer?: parameters['preferReturn'];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
}

export interface definitions {
  bookings: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /** Format: text */
    name?: string;
    /** Format: text */
    email?: string;
    /** Format: text */
    phone?: string;
    /** Format: smallint */
    numOfAdults?: number;
    /** Format: smallint */
    numOfChildren?: number;
    /** Format: text */
    paymentMethod?: string;
    /**
     * Format: bigint
     * @description Note:
     * This is a Foreign Key to `tours.id`.<fk table='tours' column='id'/>
     */
    tourId?: number;
  };
  facilities: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /** Format: text */
    name?: string;
    /**
     * Format: bigint
     * @description Note:
     * This is a Foreign Key to `tours.id`.<fk table='tours' column='id'/>
     */
    tourId?: number;
  };
  tours: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /** Format: text */
    name?: string;
    /** Format: text */
    city?: string;
    /** Format: text */
    description?: string;
    /** Format: text */
    price?: string;
    /** Format: text */
    duration?: string;
    /** Format: text */
    startDate?: string;
    /** Format: text */
    endDate?: string;
  };
}

export interface parameters {
  /**
   * @description Preference
   * @enum {string}
   */
  preferParams: 'params=single-object';
  /**
   * @description Preference
   * @enum {string}
   */
  preferReturn: 'return=representation' | 'return=minimal' | 'return=none';
  /**
   * @description Preference
   * @enum {string}
   */
  preferCount: 'count=none';
  /** @description Filtering Columns */
  select: string;
  /** @description On Conflict */
  on_conflict: string;
  /** @description Ordering */
  order: string;
  /** @description Limiting and Pagination */
  range: string;
  /**
   * @description Limiting and Pagination
   * @default items
   */
  rangeUnit: string;
  /** @description Limiting and Pagination */
  offset: string;
  /** @description Limiting and Pagination */
  limit: string;
  /** @description bookings */
  'body.bookings': definitions['bookings'];
  /** Format: bigint */
  'rowFilter.bookings.id': string;
  /** Format: text */
  'rowFilter.bookings.name': string;
  /** Format: text */
  'rowFilter.bookings.email': string;
  /** Format: text */
  'rowFilter.bookings.phone': string;
  /** Format: smallint */
  'rowFilter.bookings.numOfAdults': string;
  /** Format: smallint */
  'rowFilter.bookings.numOfChildren': string;
  /** Format: text */
  'rowFilter.bookings.paymentMethod': string;
  /** Format: bigint */
  'rowFilter.bookings.tourId': string;
  /** @description facilities */
  'body.facilities': definitions['facilities'];
  /** Format: bigint */
  'rowFilter.facilities.id': string;
  /** Format: text */
  'rowFilter.facilities.name': string;
  /** Format: bigint */
  'rowFilter.facilities.tourId': string;
  /** @description tours */
  'body.tours': definitions['tours'];
  /** Format: bigint */
  'rowFilter.tours.id': string;
  /** Format: text */
  'rowFilter.tours.name': string;
  /** Format: text */
  'rowFilter.tours.city': string;
  /** Format: text */
  'rowFilter.tours.description': string;
  /** Format: text */
  'rowFilter.tours.price': string;
  /** Format: text */
  'rowFilter.tours.duration': string;
  /** Format: text */
  'rowFilter.tours.startDate': string;
  /** Format: text */
  'rowFilter.tours.endDate': string;
}

//export interface operations {}

//export interface external {}