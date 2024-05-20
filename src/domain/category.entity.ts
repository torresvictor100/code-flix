import { validate } from "uuid";
import { Uuid } from "../shared/domain/value-objects/uuid.co";
import ValidatorRules from "../shared/domain/validators/validator-rules";

export type CategoryConstructorProps = {
    category_id?: Uuid;
    name: string;
    description?: string | null;
    is_active?: boolean;
    created_at?: Date;
}

export type CategoryCreateCommand = {
    name: string;
    description?: string | null;
    is_active?: boolean;
}

export class Category{
    category_id: Uuid;
    name: string;
    description: string | null;
    is_active: boolean;
    created_at: Date;

    constructor(props: CategoryConstructorProps) {
        this.category_id = props.category_id ?? new Uuid();
        this.name = props.name;
        this.description = props.description ?? null;
        this.is_active = props.is_active ?? true;
        this.created_at = props.created_at ?? new Date;
    }

    static create(props: CategoryConstructorProps){
        return new Category(props);
    }

    changeName(name: string){
        this.name = name
    }


    changeDescripion(description: string){
        this.description = description
    }

    activate(){
        this.is_active = true
    }

    deactivate(){
        this.is_active = false
    }

    toJson() {
        return {
            category_id: this.category_id.id,
            name: this.name,
            description: this.description,
            is_active: this.is_active,
            created_at: this.created_at
        }
    }
}


