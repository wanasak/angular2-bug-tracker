export class Bug {
    constructor(
        public id: string,
        public title: string,
        public status: number,
        public serverity: number,
        public description: string,
        public createdBy: string,
        public createdDate: number,
        public updatedBy?: string,
        public updatedDate?: number
    ) { }
}