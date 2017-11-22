// ```ts
/* tslint:disable */
function switchType(typeOrCases, maybeCases) {
    if (typeof typeOrCases['kind'] === 'string' && maybeCases)
        return switchType(maybeCases)(typeOrCases);
    var cases = typeOrCases;
    return function (type) {
        switch (type.kind) {
            case 'NULLABLE': return cases.nullable(type);
            case 'LIST': return cases.list(type);
            case 'ALIAS': return cases.alias(type);
            case 'ENUM': return cases.enum(type);
            case 'OBJECT': return cases.object(type);
            default: throw new Error("Type of kind '" + type.kind + "' is unrecognized.");
        }
    };
}
var getNamedType = switchType({
    nullable: function (type) { return getNamedType(type.nonNullType); },
    list: function (type) { return getNamedType(type.itemType); },
    alias: function (type) { return type; },
    enum: function (type) { return type; },
    object: function (type) { return type; },
});
// ```
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMDEtbmV3LXR5cGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2ludGVyZmFjZS9fX2lkZWFzX18vMDEtbmV3LXR5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQVE7QUFDUixvQkFBb0I7QUFzRXBCLG9CQUF3QixXQUE2QyxFQUFFLFVBQStCO0lBQ3BHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLFFBQVEsSUFBSSxVQUFVLENBQUM7UUFDeEQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxXQUFrQixDQUFDLENBQUE7SUFFbkQsSUFBTSxLQUFLLEdBQUcsV0FBaUMsQ0FBQTtJQUUvQyxNQUFNLENBQUMsVUFBQyxJQUFpQjtRQUN2QixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNsQixLQUFLLFVBQVUsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFXLENBQUMsQ0FBQTtZQUNuRCxLQUFLLE1BQU0sRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFXLENBQUMsQ0FBQTtZQUMzQyxLQUFLLE9BQU8sRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFXLENBQUMsQ0FBQTtZQUM3QyxLQUFLLE1BQU0sRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFXLENBQUMsQ0FBQTtZQUMzQyxLQUFLLFFBQVEsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFXLENBQUMsQ0FBQTtZQUMvQyxTQUFTLE1BQU0sSUFBSSxLQUFLLENBQUMsbUJBQWlCLElBQUksQ0FBQyxJQUFJLHVCQUFvQixDQUFDLENBQUE7UUFDMUUsQ0FBQztJQUNILENBQUMsQ0FBQTtBQUNILENBQUM7QUFFRCxJQUFNLFlBQVksR0FBNEMsVUFBVSxDQUFtQjtJQUN6RixRQUFRLEVBQUUsVUFBQSxJQUFJLElBQUksT0FBQSxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUE5QixDQUE4QjtJQUNoRCxJQUFJLEVBQUUsVUFBQSxJQUFJLElBQUksT0FBQSxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUEzQixDQUEyQjtJQUN6QyxLQUFLLEVBQUUsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLEVBQUosQ0FBSTtJQUNuQixJQUFJLEVBQUUsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLEVBQUosQ0FBSTtJQUNsQixNQUFNLEVBQUUsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLEVBQUosQ0FBSTtDQUNyQixDQUFDLENBQUE7QUFFRixNQUFNIn0=