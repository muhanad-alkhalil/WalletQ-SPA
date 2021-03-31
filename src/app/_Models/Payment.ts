
    export interface Creator {
        id: string;
        name: string;
        surname: string;
    }

    export interface Payment {
        id: string;
        creator: Creator;
        walletId: string;
        paymentState: number;
        transaction?: any;
        validUntill: Date;
        amount: number;
    }

